import { User, UserBug } from "@/app/types/typing";
import {
  faInbox,
  faQuestion,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListUsersInChannel({ users }: { users: UserBug[] }) {
  console.log(users[0].user);
  const usersInChannel = [
    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://www.sideshow.com/storage/product-images/909872/spider-man-battling-version-movie-promo-edition_marvel_square.jpg",
    },
    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://i0.wp.com/quchronicle.com/wp-content/uploads/2023/01/Spectacular-Spider-Man.jpg?fit=900%2C514&ssl=1",
    },

    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://www.sideshow.com/storage/product-images/909872/spider-man-battling-version-movie-promo-edition_marvel_square.jpg",
    },
    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://www.sideshow.com/storage/product-images/909872/spider-man-battling-version-movie-promo-edition_marvel_square.jpg",
    },
    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://www.sideshow.com/storage/product-images/909872/spider-man-battling-version-movie-promo-edition_marvel_square.jpg",
    },
    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://www.sideshow.com/storage/product-images/909872/spider-man-battling-version-movie-promo-edition_marvel_square.jpg",
    },
    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://www.sideshow.com/storage/product-images/909872/spider-man-battling-version-movie-promo-edition_marvel_square.jpg",
    },
    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://www.sideshow.com/storage/product-images/909872/spider-man-battling-version-movie-promo-edition_marvel_square.jpg",
    },
    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://www.sideshow.com/storage/product-images/909872/spider-man-battling-version-movie-promo-edition_marvel_square.jpg",
    },
    {
      id: 1,
      name: "Paulo",
      description: "The difference between the impossible and the possible...",
      profilePicture:
        "https://www.sideshow.com/storage/product-images/909872/spider-man-battling-version-movie-promo-edition_marvel_square.jpg",
    },
  ];

  return (
    <div className=" transition-all text-zinc-400 flex cursor-pointer rounded-md flex-col">
      <div className="py-4 flex items-center justify-between w-full !bg-[#313338]">
        <div className="mr-2 bg-zinc-800 h-6 rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-2 text-sm bg-transparent rounded-md outline-none"
          />
        </div>
        <div className="flex items-center gap-2 mr-1">
          <FontAwesomeIcon icon={faInbox} className="cursor-pointer" />
          <FontAwesomeIcon icon={faQuestionCircle} className="cursor-pointer" />
        </div>
      </div>
      <hr className="border-zinc-700" />
      <div className="overflow-x-hidden overflow-y-auto max-h-[90vh] scrollbar-thin hover:scrollbar-thumb-zinc-800 hover:scrollbar-track-zinc-700">
        <div className="px-2 mt-4">
          <p className="text-xs uppercase tracking-wide">Online Users</p>
          {users.map((user, idx) => {
            if (user?.user?.isOnline === false) return;
            let userDesc =
              user?.user?.descriptionText &&
              user?.user?.descriptionText?.length < 24
                ? user?.user?.descriptionText
                : user?.user?.descriptionText?.substring(0, 24) + "...";
            if (!user?.user?.descriptionText) {
              userDesc = "";
            }
            return (
              <div
                key={idx}
                className="flex items-center mt-2 hover:bg-zinc-700 rounded-md"
              >
                <img
                  src={user?.user?.profilePicture}
                  alt="User picture"
                  className="rounded-full w-11 h-11 object-cover p-1"
                />
                <div className="flex flex-col ml-1">
                  <p className="text-sm">{user?.user?.fullName}</p>
                  <p className="text-xs">{userDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-2 mt-4">
          <p className="text-xs uppercase tracking-wide">Offline Users</p>
          {users.map((user, idx) => {
            if (user?.user?.isOnline) return;
            let userDesc =
              user?.user?.descriptionText &&
              user?.user?.descriptionText?.length < 24
                ? user?.user?.descriptionText
                : user?.user?.descriptionText?.substring(0, 24) + "...";
            if (!user?.user?.descriptionText) {
              userDesc = "";
            }
            return (
              <div
                key={idx}
                className="flex items-center mt-2 hover:bg-zinc-700 rounded-md"
              >
                <img
                  src={user?.user?.profilePicture}
                  alt="User picture"
                  className="rounded-full w-11 h-11 object-cover p-1"
                />
                <div className="flex flex-col ml-1">
                  <p className="text-sm">{user?.user?.fullName}</p>
                  <p className="text-xs">{userDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
