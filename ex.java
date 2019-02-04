import java.util.*;

public class ex
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		while(T-->0)
		{
			int N = sc.nextInt();
			int[] A = new int[N];
			HashSet<Integer> h = new HashSet<Integer>();

			for(int i=0; i<N; i++)
			{
				A[i] = sc.nextInt();
			}

			int K = sc.nextInt();

			for(int i=0; i<N; i++)
			{
				int a = A[i]%K;
				int b = K-a;

				if(h.contains(b))
					h.remove(b);

				else
					h.add(a);

			}

			if(h.isEmpty())
				System.out.println("True");

			else
				System.out.println("False");	


		}
	}
}