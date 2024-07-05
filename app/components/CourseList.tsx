"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/solid";

type Course = {
  id: number;
  name: string;
  topics: string[];
};

const courses: Course[] = [
  { id: 1, name: "Course 1", topics: ["Topic 1", "Topic 2", "Topic 3"] },
  { id: 2, name: "Course 2", topics: ["Topic 1", "Topic 2", "Topic 3"] },
  { id: 3, name: "Course 3", topics: ["Topic 1", "Topic 2", "Topic 3"] },
  { id: 4, name: "Course 4", topics: ["Topic 1", "Topic 2", "Topic 3"] },
  { id: 5, name: "Course 5", topics: ["Topic 1", "Topic 2", "Topic 3"] },
  { id: 6, name: "Course 6", topics: ["Topic 1", "Topic 2", "Topic 3"] },
  { id: 7, name: "Course 7", topics: ["Topic 1", "Topic 2", "Topic 3"] },
];

export default function CourseList() {
  const [activeCourse, setActiveCourse] = useState<number | null>(null);
  const [lockedCourses, setLockedCourses] = useState<Set<number>>(new Set());
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [expandedCourses, setExpandedCourses] = useState<Set<number>>(
    new Set()
  );

  const toggleLock = (courseId: number) => {
    setLockedCourses((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(courseId)) {
        newSet.delete(courseId);
      } else {
        newSet.add(courseId);
      }
      return newSet;
    });
  };

  const toggleExpand = (courseId: number) => {
    setExpandedCourses((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(courseId)) {
        newSet.delete(courseId);
      } else {
        newSet.add(courseId);
      }
      return newSet;
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-light-gray">
      <div className="w-2/5 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center items-center p-4">
          <div className="w-full">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`p-2 border-b last:border-none ${
                  activeCourse === course.id
                    ? "bg-gray-700 text-white animate-fadeIn"
                    : "bg-gray-200 text-dark-gray"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => toggleExpand(course.id)}
                  >
                    {expandedCourses.has(course.id) ? (
                      <ChevronDownIcon className="h-5 w-5" />
                    ) : (
                      <ChevronRightIcon className="h-5 w-5" />
                    )}
                    <span className="text-lg font-medium">{course.name}</span>
                  </div>
                  <button
                    onClick={() => toggleLock(course.id)}
                    className="ml-2"
                  >
                    {lockedCourses.has(course.id) ? (
                      <LockClosedIcon className="h-5 w-5" />
                    ) : (
                      <LockOpenIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {expandedCourses.has(course.id) && (
                  <div className="mt-2 pl-7">
                    {course.topics.map((topic, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer ${
                          selectedTopic === topic
                            ? "text-red-500"
                            : "text-medium-gray"
                        }`}
                        onClick={() => {
                          setSelectedTopic(topic);
                          setActiveCourse(course.id);
                        }}
                      >
                        {course.id}.{index + 1} {topic}
                      </div>
                    ))}
                  </div>
                )}
                {!lockedCourses.has(course.id) && (
                  <button
                    className="mt-2 w-full bg-red-500 text-white py-1 rounded-lg"
                    onClick={() => setActiveCourse(course.id)}
                  >
                    {activeCourse === course.id ? "Active" : "Select Course"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/5 p-4 ml-4 bg-gray-300 rounded-lg shadow-lg flex justify-center items-center">
        {selectedTopic ? (
          <div className="text-center animate-fadeIn">
            <h1 className="text-2xl font-bold">{`Course ${activeCourse}`}</h1>
            <p className="text-xl mt-2">{selectedTopic}</p>
          </div>
        ) : (
          <h1 className="text-dark-gray text-xl font-medium">Select a topic</h1>
        )}
      </div>
    </div>
  );
}
