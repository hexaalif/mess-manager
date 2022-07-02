import React from "react";

const ShowCom = ({ paisi }) => {
  const listCom = {
    list: paisi.list,
  };
  //   console.log(paisi.list);
  return (
    <div>
      <div class="card mx-12 lg:mx-6 bg-success text-primary-content">
        <div class="card-body ">
          <ul>
            <li>
              <p className="text-xl">{listCom.list}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowCom;
