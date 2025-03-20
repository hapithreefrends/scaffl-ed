class Sample {
    public class AverageCalculator {  // AOI 1: Class Declaration
    public static void main(String[] args) {  // AOI 2: Main Method Declaration
        int[] numbers = {10, 20, 30, 40, 50};  // AOI 3: Array Initialization
        int sum = 0;  // AOI 4: Sum Initialization
        
        for (int i = 0; i < numbers.length; i++) {  // AOI 5: Loop Header
            sum += numbers[i];  // AOI 6: Summation Logic
        }

        int average = sum / numbers.length;  // AOI 7: Buggy Division (Logic Error)
        System.out.println("The average is: " + average);  // AOI 8: Output Statement
    }
}
}
