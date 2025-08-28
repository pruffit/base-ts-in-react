import React from "react";
import type { User } from "../model/types";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>
      <a
        href={`mailto:${user.email}`}
        className="text-blue-600 hover:text-blue-800"
      >
        {user.email}
      </a>
    </div>
  );
};
