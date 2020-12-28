map = {
    "Seattle": {("San Francisco", 679, True), ("Los Angeles", 961), ("Phoenix", 1115), ("Denver", 1019), ("Kansas City", 1584), ("Houston", 1890), ("Chicago", 1725), ("Nashville", 1971), ("New York", 2402), ("Washington D.C.", 2323), ("Miami", 2731)},
    "San Francisco": {("Seattle", 679, True), ("Los Angeles", 381, True), ("Phoenix", 653), ("Denver", 474, True), ("Kansas City", 1526), ("Houston", 1642), ("Chicago", 1844), ("Nashville", 1958), ("New York", 2565), ("Washington D.C.", 2435), ("Miami", 2590)},
    "Los Angeles": {("San Francisco", 381, True), ("Seattle", 961), ("Phoenix", 357, True), ("Denver", 830), ("Kansas City", 1346), ("Houston", 1371), ("Chicago", 1731), ("Nashville", 1776), ("New York", 2445), ("Washington D.C.", 2294), ("Miami", 2335)},
    "Phoenix": {("San Francisco", 653), ("Los Angeles", 357, True), ("Seattle", 1115), ("Denver", 586, True), ("Kansas City", 1020), ("Houston", 1014), ("Chicago", 1440), ("Nashville", 1443), ("New York", 2139), ("Washington D.C.", 1977), ("Miami", 1978)},
    "Denver": {("San Francisco", 474, True), ("Los Angeles", 830), ("Phoenix", 586, True), ("Seattle", 1019), ("Kansas City", 557, True), ("Houston", 878, True), ("Chicago", 906), ("Nashville", 1020), ("New York", 1626), ("Washington D.C.", 1489), ("Miami", 1725)},
    "Kansas City": {("San Francisco", 1526), ("Los Angeles", 1346), ("Phoenix", 1020), ("Denver", 557, True), ("Seattle", 1584), ("Houston", 815, True), ("Chicago", 412, True), ("Nashville", 554, True), ("New York", 1127), ("Washington D.C.", 958), ("Miami", 1147)},
    "Houston": {("San Francisco", 1642), ("Los Angeles", 1371), ("Phoenix", 1014), ("Denver", 878, True), ("Kansas City", 815, True), ("Seattle", 1890), ("Chicago", 933), ("Nashville", -1), ("New York", 1417), ("Washington D.C.", 1217), ("Miami", 966)},
    "Chicago": {("San Francisco", 1844), ("Los Angeles", 1731), ("Phoenix", 1440), ("Denver", 906), ("Kansas City", 412, True), ("Houston", 933), ("Seattle", 1725), ("Nashville", 395), ("New York", 712, True), ("Washington D.C.", -1), ("Miami", 1191)},
    "Nashville": {("San Francisco", 1958), ("Los Angeles", 1776), ("Phoenix", 1443), ("Denver", 1020), ("Kansas City", 554, True), ("Houston", 665, True), ("Chicago", 395), ("Seattle", 1971), ("New York", 1008), ("Washington D.C.", -1), ("Miami", 817, True)},
    "New York": {("San Francisco", 2565), ("Los Angeles", 2445), ("Phoenix", 2139), ("Denver", 1626), ("Kansas City", 1127), ("Houston", 1417), ("Chicago", 712, True), ("Nashville", 758), ("Seattle", 2402), ("Washington D.C.", 203, True), ("Miami", 1091)},
    "Washington D.C.": {("San Francisco", 2435), ("Los Angeles", 2294), ("Phoenix", 1977), ("Denver", 1489), ("Kansas City", 958), ("Houston", 1217), ("Chicago", 701, True), ("Nashville", 566, True), ("New York", -1), ("Seattle", 2323), ("Miami", 926, True)},
    "Miami": {("San Francisco", 2590), ("Los Angeles", 2335), ("Phoenix", 1978), ("Denver", 1725), ("Kansas City", 1147), ("Houston", 483, True), ("Chicago", 1191), ("Nashville", 817, True), ("New York", 1091), ("Washington D.C.", 926, True), ("Seattle", 2731)},
}

def h_distance(info_tuple):
    start, end, looking_at_city = info_tuple[0], info_tuple[1], info_tuple[2]
    if len(set(info_tuple)) == 3:
        return dict([(tuple[0], tuple[1]) for tuple in map[looking_at_city]])[end] \
            + dict([(tuple[0], tuple[1]) for tuple in map[start]])[looking_at_city]
    else:
        return 999999
#
def a_star(start, end, visited=[]):
    visited.append(start)
    queue = [tuple[2] for tuple in sorted([(start, end, city) for city in \
        [city_tuple[0] for city_tuple in map[start] if city_tuple not in visited \
            if True in city_tuple]], key=h_distance)]
    return (visited + [end]) if end in queue else a_star(queue[0], end, visited)

#

# def h_distance(info_tuple):
#     start, end, step = info_tuple[0], info_tuple[1], info_tuple[2]
#     return dict([(tuple[0], tuple[1]) for tuple in map[step]])[end] \
#         + dict([(tuple[0], tuple[1]) for tuple in map[start]])[step] \
#             if len(set(info_tuple)) == 3 else 999999
# #
# def a_star(start, end, visited=[]):
#     visited.append(start)
#     queue = [tuple[2] for tuple in \
#         sorted([(start, end, city) for city in [city_tuple[0] for city_tuple in map[start] \
#             if city_tuple not in visited if True in city_tuple]], key=h_distance)]
#     return (visited + [end]) if end in [city for city in queue] else a_star(queue[0], end, visited)
#
# print(a_star("Miami", "New York"))



# print(a_star("Miami", "New York", [])) # Miami - DC - Chicago - NY
# print(a_star("Seattle", "New York", [])) # Seattle - SF - Denver - KC - Chicago - NY
# print(a_star("Los Angeles", "Washington D.C.", [])) # LA - Phoenix - Denver - KC - Chicago - NY - DC
print(a_star("Houston", "Washington D.C.", [])) # Houston - KC - Chicago - NY - DC
# print(a_star("Phoenix", "Miami", [])) # Phoenix - Denver - KC - Nashville - Miami
