# huffman's Algo









class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        task_counts = [[-value, task] for task, value in Counter(tasks).items()]
        task_counts.sort();
        
        units = 0
        while task_counts:
            task = heapq.heappop(task_counts)
            if task[0] < -1:
                tasks_between = []
                while len(tasks_between) < n and task_counts:
                    tasks_between.append(heapq.heappop(task_counts))
                for between_task in tasks_between:
                    if between_task[0] < -1:
                        between_task[0] += 1
                        heapq.heappush(task_counts, between_task)
                units += n
                task[0] += 1
                heapq.heappush(task_counts, task)
            units += 1
        return units