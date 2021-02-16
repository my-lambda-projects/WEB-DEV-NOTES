# Time: O(n^2)
# Space: O(log n)














class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []
        i = 0
        while i < len(nums) - 2:
            j = i + 1
            k = len(nums) - 1
            while j < k:
                three_sum = nums[i] + nums[j] + nums[k]
                if three_sum == 0:
                    result.append([nums[i], nums[j], nums[k]])
                    j += 1
                    while nums[j] == nums[j - 1] and j < k:
                        j += 1
                    k -= 1
                    while nums[k] == nums[k + 1] and k > j:
                        k -= 1
                elif three_sum < 0:
                    j += 1
                    while nums[j] == nums[j - 1] and j < k:
                        j += 1
                elif three_sum > 0:
                    k -= 1
                    while nums[k] == nums[k + 1] and k > j:
                        k -= 1
            i += 1
            while nums[i] == nums[i - 1] and i < len(nums) - 2:
                i += 1
        return result