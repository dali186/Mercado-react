import SelectPage from "../component/SelectPage";

const MainPage = () => {
    const posts = [
      {
        id: 1,
        title: "여행 계획 세우기",
        description: "혼자 여행 또는 친구들과의 여행을 계획합니다.",
        link: "/plan",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        title: "여행 계획 정리하기",
        description: "지난 여행의 여정들과 추억들을 정리합니다.",
        link: "/organize",
        image: "https://via.placeholder.com/300",
      },
    ];
  
    return <>
    <SelectPage descriptions={posts} />
    </>
  };
  
  export default MainPage;
  