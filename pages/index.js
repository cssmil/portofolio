import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import EdinaPreview from "../components/pages/preview";
import HomeHorizontal from "../components/pages/home-horizontal";
import HomeSidebar from "../components/pages/home-sidebar";

const index = () => {
  return (
    <>
      <Seo pageTitle="Preview" />
      <HomeHorizontal />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
