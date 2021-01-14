 var v=[];
 var final=[];
 var up_1 = -1;
 var down_1 = -1;
 var up_store = [];
var sum_1 = -1;
var sum_sore = 0;
var mean_1 = -1;
var mean_store = 0;
var min_1 = -1;
var min_store = 0;
var max_1 = -1;
var max_store = 0;
var st_1 = -1;
var st_store = 0;
var med_1 = -1;
var med_store = 0;
var down_1 = -1;
var down_store = [];
 function Entry()
{
    var p = document.getElementById("array").value;
     final = p.split(",");
    for(var i=0;i<final.length;i++)
    {
        v.push(parseFloat(final[i]));
    }
    console.log(v);
}
function up_helper()
{
    if(up_1 == -1)
    {
        var a = up();
        console.log(a);
        up_store = a;
        up_1 = 0;
        return;
    }
    console.log(up_store);
}
function up()
{
    return v.sort((a,b)=>a-b);
}
function down_helper()
{
    if(down_1 == -1)
    {
        var a = down();
        console.log(a);
        down_store = a;
        down_1 = 0;
        return;
    }
    console.log(down_store);

}
function down()
{
    
    return v.sort((a,b)=>b-a);
}
function max()
{
    if(max_1 == -1)
    {
        var temp = v[0];
    for(var i=0;i<v.length;i++)
    {
        temp = Math.max(v[i],temp);
    }
    console.log(temp);
    max_store = temp;
    max_1 = 0;
    return;
    }
    console.log(max_store);
}
function min()
{
    if(min_1 == -1)
    {
    var temp = v[0];
    for(var i=0;i<v.length;i++)
    {
        temp = Math.min(v[i],temp);
    }
    console.log(temp);
    min_store = temp;
    min_1= 0;
    return;
    }
    console.log(min_store);
}
function sum_helper()
{
    if(sum_1 == -1)
    {
        var a = sum();
        sum_store = a;
        sum_1 = 0;
        console.log(a);
        return;
    }
    console.log(sum_store);
}
function sum()
{
    var temp = 0;
    for(var i=0;i<v.length;i++)
    {
        temp = temp + v[i];
    }
    return temp;
}
function median()
{
    if(med_1 == -1)
    {
        var m =0;
        if(v.length%2 != 0)
            m = v[Math.floor(v.length/2)];
        else
            m = (v[Math.floor(v.length/2)] + v[Math.floor((v.length-1)/2)])/2;
        med_1 = 0;
        med_store =m;
        return; 
    }
    console.log(med_store);
}
function mean()
{
    return (sum()/v.length);
}
function mean_helper()
{
    if(mean_1 == -1)
    {
        var a = mean();
        console.log(a);
        mean_store = a;
        mean_1 = 0;
        return;
    }
    console.log(mean_store);
}
function stdev()
{
    if(st_1 == -1)
    {
        var temp = 0;
        var t = mean();
        for(var i=0;i<v.length;i++)
        {
            temp = temp + (v[i]-t)*(v[i]-t);
        }
        var a =  Math.sqrt(temp/v.length);
        console.log(a);
        st_1 = 0;
        st_store = a;
        return;
    }
    console.log(st_store);
}


