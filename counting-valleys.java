public static int countingValleys(int steps, String path) {
    // Write your code here
    char[] pathArr = path.toCharArray();
    int[] array = new int[steps];
    int seaLevel = 0;

    for (int i = 0; i < steps; i++) {
        if (pathArr[i] == 'U') {
            seaLevel += 1;
            array[i] = seaLevel;
        } else if (pathArr[i] == 'D') {
            seaLevel -= 1;
            array[i] = seaLevel;
        }
    }

    int numValleys = 0;
    for (int i = 0; i < steps; i++) {
        if (array[i] < 0 && array[i + 1] == 0) {
            numValleys++;
        }
    }
    return numValleys;

}