import React from "react";

const MunkaiCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
};

export default MunkaiCard;
