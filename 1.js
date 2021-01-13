var values = [10,1,9,2,8,3,7,4,6];
function up(v)
{
    return v.sort((a,b)=>a-b);
}
function down(v)
{
    
    return v.sort((a,b)=>b-a);
}
function max(v)
{
    var temp = v[0];
    for(var i=0;i<9;i++)
    {
        temp = Math.max(v[i],temp);
    }
    return temp;
}
function min(v)
{
    var temp = values[0];
    for(var i=0;i<9;i++)
    {
        temp = Math.min(values[i],temp);
    }
    return temp;
}
function sum(v)
{
    var temp = 0;
    for(var i=0;i<9;i++)
    {
        temp = temp + v[i];
    }
    return temp;
}
function median(v)
{
    if(v.length%2 != 0)
        return v[Math.floor(v.length/2)];
    return v[Math.floor(v.length/2)] + v[Math.floor((v.length-1)/2)];
}
function mean(v)
{
    return sum(v)/v.length;
}
function stdev(v)
{
    var temp = 0;
    var t = mean(v);
    for(var i=0;i<v.length;i++)
    {
        temp = temp + (v[i]-t)*(v[i]-t);
    }
    return Math.sqrt(temp/v.length);
}
console.log(max(values));
console.log(min(values));
console.log(up(values));
console.log(sum(values));
console.log(median(values));
console.log(mean(values));
console.log(stdev(values));
console.log(down(values));
