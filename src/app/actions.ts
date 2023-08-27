"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"

const supabase = createServerComponentClient({ cookies })
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
    console.log(channelId, userId, message)
    revalidateTag("channels");
}