import React from 'react';

const CustomCard = () => {
  return (
    <div>
      <div className="bg-base w-[250px] h-[250px] rounded-xl">
        <img
          className="w-full h-full rounded-xl object-cover"
          src="https://images.unsplash.com/photo-1685438531044-ef75606db89d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="example"
        />
      </div>
    </div>
  );
};

export default CustomCard;
