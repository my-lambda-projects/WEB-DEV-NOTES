# CLASS DECLARATION
#
# Declare a class named "Airport" with the following features:
#
# * A constructor that takes two values: a name and an abbreviation
# * A method named "number_of_planes" that returns the number of planes parked
#   at the airport. That number should be 0 when the object is first created.
# * A method named "plane_arrives" that increases the number of planes parked
#   at the airport by 1.
# * A method named "plane_departs" that decreases the number of planes parked
#   at the airport by 1
# * A method named "get_number_of_planes" that returns the current number of
#   planes parked at the airport
# * A method named "__repr__" that returns a string with the following format:
#     "<{airport abbreviation} {number of planes at the airport}"
#   An example would be
#     "<LAX 12>"

class Airport:
    def __init__(self, name, abbreviation):
        self._number_of_planes = 0
        self._abbr = abbreviation

    def get_number_of_planes(self):
        return self._number_of_planes

    def plane_arrives(self):
        self._number_of_planes += 1

    def plane_departs(self):
        self._number_of_planes -= 1

    def __repr__(self):
        return f"<{self._abbr} {self._number_of_planes}>"
