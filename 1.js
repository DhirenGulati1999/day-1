 var v=[];
 var final=[];
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
    var a = up();
    console.log(a);
}
function up()
{
    return v.sort((a,b)=>a-b);
}
function down_helper()
{
    var a = down();
    console.log(a);
}
function down()
{
    
    return v.sort((a,b)=>b-a);
}
function max()
{
    var temp = v[0];
    for(var i=0;i<v.length;i++)
    {
        temp = Math.max(v[i],temp);
    }
    console.log(temp);
}
function min()
{
    var temp = v[0];
    for(var i=0;i<v.length;i++)
    {
        temp = Math.min(v[i],temp);
    }
    console.log(temp);
}
function sum_helper()
{
    var a = sum();
    console.log(a);
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
    if(v.length%2 != 0)
        console.log(v[Math.floor(v.length/2)]);
    console.log((v[Math.floor(v.length/2)] + v[Math.floor((v.length-1)/2)])/2);
}
function mean()
{
    return (sum()/v.length);
}
function mean_helper()
{
    var a = mean();
    console.log(a);
}
function stdev()
{
    var temp = 0;
    var t = mean();
    for(var i=0;i<v.length;i++)
    {
        temp = temp + (v[i]-t)*(v[i]-t);
    }
    console.log( Math.sqrt(temp/v.length));
}

