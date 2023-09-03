"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"

const supabase = createServerComponentClient({ cookies })

export async function createChannel(formData: FormData, isText: boolean, name: string, isPublic: boolean, serverId: number, userAdmin: number) {
    console.log(isText, name, isPublic, serverId, userAdmin);
    const { data: channelCreated, error } = await supabase.from("channel").insert({
        serverId,
        isText,
        name,
        isPublic
    }).select("id")

    if (!isPublic && !error) {
        await supabase.from("userChannel").insert({
            userId: userAdmin,
            channelId: channelCreated[0].id
        })
    }
}
export async function sendMessage(event: FormData) {
    /* @ts-ignore */
    const channelId = parseInt(event.get("channelId")) /* @ts-ignore */
    const userId = parseInt(event.get("userId"))
    const message = event.get("message")
    await supabase.from("message").insert({
        userId,
        channelId,
        content: message,
    })
}


export async function setServer(serverId: number, userId: number) {
    console.log(serverId, userId)
    if (userId === -1) return;
    const result = await supabase.from("user").update({ lastServerId: serverId }).eq("id", userId)
    console.log(result.data)
    revalidateTag("user");

}


export async function setChannel(serverId: number, channelId: number) {
    console.log(serverId)
    const result = await supabase.from("server").update({ channelId }).eq("id", serverId)
    console.log(result.data)
    revalidateTag("server");
    revalidateTag("channel")
}


export async function inviteToServer(serverId: number, userId: number, sent_userId: number) {
    console.log(serverId, userId, sent_userId)
    const res = await supabase.from("serverInvites").insert({
        server_id: serverId,
        user_id: userId,
        sent_user_id: sent_userId,
        confirmed: false
    })
    const resNoti = await supabase.from("notification").insert({
        to_user_id: userId,
        from_user_id: sent_userId,
        notification: "You have been invited to this server.",
        type: "invite-server",
        isRead: false,
    })
    return { error: resNoti.error, status: res.status, message: res.statusText }
}

export async function acceptInviteToServer(userId: number, serverId: number) {
    console.log(userId, serverId)

    const r = await supabase.from("serverInvites").update({
        updated_at: new Date(), confirmed: true,
    }).match({ user_id: userId, server_id: serverId })


    await supabase.from("userServer").insert({
        userId,
        serverId
    })
    revalidateTag("user");
    // await supabase.from("notification").insert({
    //     to_user_id: userId,
    //     from_user_id: sent_userId,
    //     notification: "You have been invited to this server.",
    //     type: "accepted-invite-server",
    //     isRead: false,
    // })
}

