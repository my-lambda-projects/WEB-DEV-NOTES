# time: O(1) Space: O(1)





class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        key = tuple(cells)
        seen = { key: 0 }
        possibles = [cells]
        for j in range(N):
            c = [0] * 8
            for i in range(1, 7):
                if cells[i - 1] ^ cells[i + 1] == 0:
                    c[i] = 1;
            key = tuple(c)
            if key in seen:
                idx = seen[key]
                len_circular_loop = len(possibles) - idx
                num_remaining = N - j - 1
                return possibles[idx + (num_remaining % len_circular_loop)]
            seen[key] = len(possibles)
            possibles.append(c)
            cells = c
        return cells