import SelectPage from "../component/SelectPage";

const PlanPage = () => {
    const posts = [
      {
        id: 1,
        title: "개인",
        description: "Learn the basics of creating a React application step by step.",
        link: "/plan/personal",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "단체",
        description: "A comprehensive guide to mastering Tailwind CSS for your projects.",
        link: "/plan/comm",
        image: "https://via.placeholder.com/300",
      },
    ];
  
    return <>
    <SelectPage descriptions={posts} />
    </>
  };
  
  export default PlanPage;
  