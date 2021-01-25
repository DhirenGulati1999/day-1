#include<bits/stdc++.h>
using namespace std;

int search(vector<string> &pat,vector<string> &txt) 
{ 
    int count = 0;
    cout << txt.size() << " "<< pat.size() << endl;
    for(int i=0;i<txt.size()-pat.size()+1;i++)
    {
        int flag = 0;
        for(int j=0;j<pat.size();j++)
        {
        	if(pat[j] !=txt[i+j])
            {
                flag = 1;
                break;
            }
        }
     	if(!flag)
        {
            count++;
        }
    }
    return count;
    
} 

void length(string &s,vector<string> &v)
{
    int len = 0,i=0;
    string p = "";
    while(i < s.size())
    {
        if(s[i] == ' ')
        {
            v.push_back(p);
            while(s[i]==' ')
            {i++;}
            p="";
        }
        else if((s[i]==',') || (s[i]=='!') || (s[i]=='.'))
        {
            v.push_back(p);
            p=string(1,s[i]);
            v.push_back(p);
            p="";
            while((i<s.size()) && (s[i]==',') || (s[i]=='!') || (s[i]=='.') || (s[i]==' '))
            {
                i++;
            }
        }
        else
        {
            p.push_back(s[i]);
            i++;
        }
    }
    v.push_back(p);
}
int paircount(vector<string> &v)
{
    int pair = 0;
    for(int i=0;i<v.size();i++)
    {
        if((v[i]==",") || (v[i]=="!") || (v[i]==".") || (v[i]==" "))
        {
            continue;
        }
        else
        {
            if(i>0 && ((v[i-1]==",") || (v[i-1]=="!") || (v[i-1]==".") || (v[i-1]==" ")))
            {
                continue;
            }
            else if(i>0)
            {
                pair++;
            }
        }
        
    }
}
void read_char_by_char() {
    string filename ;
    filename = "let.txt";
    ifstream file;
    file.open(filename.c_str());
    string s="";
    string word;
    while(file>>word){
        s = s + word;
        s = s+ ' ';
    }
    transform(s.begin(), s.end(), s.begin(), ::tolower);
    /*FILE *filePointer;
    char ch;
    filePointer = fopen("let.txt", "r");
    if (filePointer == NULL)
    {
        printf("File is not available \n");
    }
    else
    {
        while ((ch = fgetc(filePointer)) != EOF)
        {
            s.push_back(tolower(ch));
        }
    }
    transform(s.begin(), s.end(), s.begin(), ::tolower);*/
    string pat = "the phone";
    int upper = 0,lower = 0;
    vector<string> v;
    length(pat,v);
    int pair = 0;
    vector<string> txt;
    length(s,txt);
    cout << txt.size() << endl;
   // cout << txt.size() << " " << pat.size() << endl;
    upper = search(v,txt);
    cout << upper << endl;
    cout << float(upper)/(paircount(txt));
}
int main()
{
    read_char_by_char();
    return 0;
}