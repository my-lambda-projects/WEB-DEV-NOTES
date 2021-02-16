
  static boolean testsPass() {
    String allUnique = "abcdefghijklmnopq";
    String notAllUnique = "abcdefghidjklm";
    boolean check = isAllUnique(allUnique);
    if (!check) {
      return false;
    }
    check = isAllUnique(notAllUnique);
    if (check) {
      return false;
    }
    check = isAllUniqueWithStreams(allUnique);
    if (!check) {
      return false;
    }
    check = isAllUniqueWithStreams(notAllUnique);
    if (check) {
      return false;
    }
    String test = "qwertyuiopqazxcvbnm";
    check = lengthOfLongestUniqueSubstr(test) == 18;
    if (!check) {
      return false;
    }
    return true;
  }

