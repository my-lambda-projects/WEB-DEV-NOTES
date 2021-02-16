# O(n) solution










class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        task_counts = Counter(tasks).items()
        
        max_frequency = 0
        num_most_frequent_tasks = 0
        
        for task, frequency in task_counts:
            
            if frequency == max_frequency:
                num_most_frequent_tasks += 1
                
            elif frequency > max_frequency:
                max_frequency = frequency
                num_most_frequent_tasks = 1
        
        return max(len(tasks), (n + 1) * (max_frequency - 1) + num_most_frequent_tasks)