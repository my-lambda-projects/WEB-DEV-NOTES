cmake_minimum_required(VERSION 2.8.3)
project(dtw)

## Check if we are an ROS system first
find_package(catkin)
if(catkin_FOUND)
    message(STATUS "Catkin found. Building ROS package")
    ## Find catkin dependencies
    find_package(catkin REQUIRED COMPONENTS roscpp)
    ## Make the catkin_package
    catkin_package(INCLUDE_DIRS include LIBRARIES ${PROJECT_NAME} CATKIN_DEPENDS roscpp)
    ## Set compiler flags
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -O3")
    set(CMAKE_CXX_FLAGS "-std=c++0x ${CMAKE_CXX_FLAGS} -O3")
    ## Set include path
    include_directories(include ${catkin_INCLUDE_DIRS})
    ## Make the library
    add_library(${PROJECT_NAME} src/dtw.cpp)
    add_dependencies(${PROJECT_NAME} ${catkin_EXPORTED_TARGETS})
    target_link_libraries(${PROJECT_NAME} ${catkin_LIBRARIES} rt)
    ## Make the simple example/test
    add_executable(dtw_example src/main.cpp)
    add_dependencies(dtw_example ${catkin_EXPORTED_TARGETS})
    target_link_libraries(dtw_example ${PROJECT_NAME} ${catkin_LIBRARIES} rt)
else()
    message(STATUS "Catkin not found. Building standard C++ library")
    ## Set compiler flags
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -O3")
    set(CMAKE_CXX_FLAGS "-std=c++0x ${CMAKE_CXX_FLAGS} -O3")
    ## Set include path
    include_directories(include)
    ## Make the library
    add_library(${PROJECT_NAME} SHARED src/dtw.cpp)
    target_link_libraries(${PROJECT_NAME} rt)
    ## Make the simple example/test
    add_executable(dtw_example src/main.cpp)
    target_link_libraries(dtw_example ${PROJECT_NAME} rt)
endif()

