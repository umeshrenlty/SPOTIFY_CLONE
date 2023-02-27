#include<bits/stdc++.h>
using namespace std;
void subsequence(vector<int> arr,int index,vector<vector<int>> &ans,vector<int> temp)
{
    int n=arr.size();
    if(index==n)
    {
        ans.push_back(temp);
        return;
        
    }
     subsequence(arr,index+1,ans,temp);
    temp.push_back(arr[index]);
   
    subsequence(arr,index+1,ans,temp);

}
int main(){

 vector<int> arr{1,2,3,4};

 vector<vector<int>> ans;
 vector<int> temp;
 int index=0;
 subsequence(arr,index,ans,temp);

for(int i=0;i<ans.size();i++)
{
    for(int j=0;j<ans[i].size();j++)
    {
        cout << ans[i][j]<<" ";
    }
    cout<<endl;
}
 return 0;
}