#include <stdio.h>
#include <stdlib.h>
#include "math.h"
#include <vector>
#include <string>
#include <sstream>
#include "string.h"
#include <iostream>
#include <algorithm>
#include <stdexcept>
#include <dtw/dtw.h>

double euclidean_distance(std::vector<double> P1, std::vector<double> P2)
{
    double total = 0.0;
    for (unsigned int i = 0; i < P1.size(); i++)
    {
        total = total + pow((P1[i] - P2[i]), 2);
    }
    return sqrt(total);
}

int compare_performance(int traj_length, int iterations)
{
    struct timespec bstv, betv;
    printf("Building test arrays\n");
    std::vector< std::vector<double> > test_vec_1;
    for (int i = 0; i < traj_length; i++)
    {
        std::vector<double> state;
        state.push_back(0.0);
        state.push_back(0.0);
        state.push_back(0.0);
        test_vec_1.push_back(state);
    }
    std::vector< std::vector< std::vector<double> > > test_vec_2;
    for (int i = 0; i < iterations; i++)
    {
        std::vector< std::vector<double> > traj;
        for (int j = 0; j < traj_length; j++)
        {
            std::vector<double> state2;
            state2.push_back((double)rand());
            state2.push_back((double)rand());
            state2.push_back((double)rand());
            traj.push_back(state2);
        }
        test_vec_2.push_back(traj);
    }
    DTW::SimpleDTW my_eval = DTW::SimpleDTW(traj_length, traj_length, euclidean_distance);
    printf("Evaluating\n");
    //Run tests
    printf("-----Test single-threaded version-----\n");
    printf("Testing vector variant\n");
    clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &bstv);
    double scost = 0.0;
    for (int i = 0; i < iterations; i++)
    {
        scost = my_eval.EvaluateWarpingCost(test_vec_1, test_vec_2[i]);
    }
    clock_gettime(CLOCK_PROCESS_CPUTIME_ID, &betv);
    //---------------------------------------------
    //-----Compute runtimes (single-threaded)--------;
    float bsecsv = (float)(betv.tv_sec - bstv.tv_sec);
    bsecsv = bsecsv + (float)(betv.tv_nsec - bstv.tv_nsec) / 1000000000.0;
    printf("Final cost: %f\n", scost);
    printf("SINGLE (vector): %f\n", bsecsv);
    return 0;
}

int main()
{
    std::cout << "Running performance tests..." << std::endl;
    compare_performance(1000, 1000);
    std::cout << "...done performance testing" << std::endl;
    return 0;
}

