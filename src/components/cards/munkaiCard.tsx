import React from "react";

const MunkaiCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default MunkaiCard;
