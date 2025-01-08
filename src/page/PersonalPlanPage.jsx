import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TravelPlanPage = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");

  const handleAddActivity = () => {
    if (newActivity) {
      setActivities([...activities, newActivity]);
      setNewActivity("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-900">여행 계획 세우기</h1>

        <div className="mt-8">
          {/* 여행지 입력 */}
          <div className="mb-6">
            <label className="block text-lg text-gray-700">여행지</label>
            <input
              type="text"
              placeholder="예: 일본, 파리"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* 시작 날짜와 종료 날짜 */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg text-gray-700">시작 날짜</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                placeholderText="시작 날짜 선택"
              />
            </div>

            <div>
              <label className="block text-lg text-gray-700">종료 날짜</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                placeholderText="종료 날짜 선택"
              />
            </div>
          </div>

          {/* 활동 추가 */}
          <div className="mb-6">
            <label className="block text-lg text-gray-700">활동</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
                placeholder="활동을 입력하세요"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={handleAddActivity}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                추가
              </button>
            </div>

            {/* 활동 목록 */}
            <ul className="mt-4 space-y-2">
              {activities.map((activity, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{activity}</span>
                  <button
                    onClick={() => {
                      const updatedActivities = activities.filter(
                        (item, i) => i !== index
                      );
                      setActivities(updatedActivities);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 제출 버튼 */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                alert("여행 계획이 저장되었습니다!");
              }}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              여행 계획 저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanPage;
