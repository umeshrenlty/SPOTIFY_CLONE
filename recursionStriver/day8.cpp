// mergeSort

#include <bits/stdc++.h>
using namespace std;
void merge(int arr[], int left, int mid, int right)
{
    int n1 = mid - left + 1;
    int n2 = right - mid;
    int *leftArray = new int[n1];
    int *rightArray = new int[n2];
    for (int i = 0; i < n1; i++)
    {
        leftArray[i] = arr[left+i];
    }
    for (int j =0; j < n2; j++)
    {
        rightArray[j] = arr[j+mid+1];

    }
    int x = 0, y = 0, z = left;

    while (x < n1 && y < n2)
    {
        if (leftArray[x] <= rightArray[y])
        {
            arr[z] = leftArray[x];
            x++;
           
        
        }
        else
        {
            arr[z] = rightArray[y];
             y++;
        }
        z++;

    }
    while(x<n1)
    {
        arr[z]=leftArray[x];
        x++;
        z++;
        
    }
    while(y<n2)
    {
        arr[z]=rightArray[y];
        x++;
        y++;

    }
    delete[] leftArray;
    delete[] rightArray;
}
void mergeSort(int arr[], int left, int right)
{
    if(left>=right)
    {
        return;
    }
    int mid = left + (right - left)/2;

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}
int main()
{

    int arr[] = {-74,48,-20,2,10};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout<<n<<endl;
    int left = 0;
    int right = n - 1;
    mergeSort(arr, left, right);

    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";
    }
    
    return 0;
}
 void merge(vector<int>& nums,int start,int mid,int end)
  {
      int n1=mid-start+1;
      int n2=end-mid;
      int *leftArray=new int[n1];
      int *rightArray=new int[n2];
      for(int i=0;i<n1;i++)
      {
          leftArray[i]=nums[i+start];

      }
        for(int j=0;j<n2;j++)
      {
          rightArray[j]=nums[j+mid+1];
          
      }
      int x=0,y=0;
      int z=start;
      while(x<n1 && y<n2)
      {
          if(leftArray[x]<=rightArray[y])
          {
              nums[z]=leftArray[x];
               x++;
          }
          else
          {
              nums[z]=rightArray[y];
              y++;
          }
          z++;
      }
      while(x<n1)
      {
          nums[z]=leftArray[x];
          x++;
          z++;
      }
       while(y<n2)
      {
          nums[z]=rightArray[y];
          y++;
          z++;
      }
      delete[] leftArray;
      delete[] rightArray;
  }