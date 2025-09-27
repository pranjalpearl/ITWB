import Breadcrumb from "@/components/common/Breadcrumb";
import React from "react";
import Csr from "./Csr";

const page = () => {
  return (
    <div>
      <Breadcrumb
        items={[{ name: "Home", link: "/" }, { name: "Trip Package" }]}
        showSearch={true}
      />
      <div className="spacer-bottom"></div>
      <Csr/>
    </div>
  );
};

export default page;
page;
