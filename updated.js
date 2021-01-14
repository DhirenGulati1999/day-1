 var v=[];
 var flag = {};
 var store = {};
 function Entry()
{
    v = [];
    flag = {};
    store = {};
    var p = document.getElementById("array").value;
    var final = p.split(",");
    for(var i=0;i<final.length;i++)
    {
        v.push(parseFloat(final[i]));
    }
    console.log(v);
    return v;
}
function perform()
{
    var selected = document.getElementById("options").value;
    var output=null;
    switch(selected)
    {
        case "up" : output = up_helper();
                    break;
        case "down" : output = down_helper();
                    break;
        case "max" : output = max();
                    break;
        case "min" : output = min();
                    break;
        case "mean" : output = mean_helper();
                    break;
        case "median" :output = median();
                        break;
        case "sum" : output = sum_helper();
                     break;
        case "stdev":output = stdev();
                    break;
        default:
    }
    document.getElementById("answer").innerHTML = output;
}
function up_helper()
{
    if(!('sort' in flag))
    {
        up();
    }
    else if(flag['sort'] == 'down')
    {
        v.reverse();
    }
    flag['sort'] = 'up';
    console.log(v);
    return v;
}
function up()
{
    return v.sort((a,b)=>a-b);
}
function down_helper()
{
    if(!('sort' in flag))
    {
        down();
    }
    else if(flag['sort'] == 'up')
    {
        v.reverse();
    }
    flag['sort'] = 'down';
    console.log(v);
    return v;
}
function down()
{
    
    return v.sort((a,b)=>b-a);
}
function max()
{
    if('sort' in flag)
    {
        if(flag['sort'] == 'up')
        {
            store['max'] = v[v.length-1];
        }
        else
        {
            store['max'] = v[0];
        }
        flag['max'] = 0;
    }
    else if(!('max' in flag))
    {
        var temp = v[0];
        for(var i=0;i<v.length;i++)
        {
            temp = Math.max(v[i],temp);
        }
        store['max'] = temp;
        flag['max'] = 0;
    }
    console.log(store['max']);
    return store['max'];
}
function min()
{
    if('sort' in flag)
    {
        if(flag['sort'] == 'down')
        {
            store['min'] = v[v.length-1];
        }
        else
        {
            store['min'] = v[0];
        }
        flag['min'] = 0;
    }
    else if(!('min' in flag))
    {
        var temp = v[0];
        for(var i=0;i<v.length;i++)
        {
            temp = Math.min(v[i],temp);
        }
        store['min'] = temp;
        flag['min'] = 0;
    }
    console.log(store['min']);
    return store['min'];
}
function sum_helper()
{
    if(!('sum' in flag))
    {
        var a = sum();
        store['sum'] = a;
        flag['sum'] = 0;
    }
    console.log(store['sum']);
    return store['sum'];
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

    if(!(median in flag))
    {
        if(!('sort' in flag))
        {
            up();
        }
        var m =0;
        if(v.length%2 != 0)
            m = v[Math.floor(v.length/2)];
        else
            m = (v[Math.floor(v.length/2)] + v[Math.floor((v.length-1)/2)])/2;
        store['median'] = m;
        flag['median'] = 0;
    }
    console.log(store['median']);
    return store['median'];
}
function mean()
{
    return (sum()/v.length);
}
function mean_helper()
{
    if(!('mean' in flag))
    {
        var a = mean();
        store['mean']=a;
        flag['mean'] = 0;
    }
    console.log(store['mean']);
    return store['mean'];
}
function stdev()
{
    if(!('stdev' in flag))
    {
        var temp = 0;
        var t = mean();
        for(var i=0;i<v.length;i++)
        {
            temp = temp + (v[i]-t)*(v[i]-t);
        }
        var a =  Math.sqrt(temp/v.length);;
        store['stdev'] = a;
        flag['stdev'] = 0;
    }
    console.log(store['stdev']);
    return store['stdev'];
}

