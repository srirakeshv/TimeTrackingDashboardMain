const arr=[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

// initialize
let tabContent=document.querySelectorAll('.content')
let time=document.querySelectorAll('.time')
let hr=document.querySelectorAll('.hr')

tabContent.forEach(tab=>{
    tab.addEventListener('click',()=>{
        if(tab.innerHTML==='Daily')
        {
            daily()
        }
        else if(tab.innerHTML==='Weekly')
        {
            weekly()
        }
        else if(tab.innerHTML==='Monthly')
        {
            monthly()
        }
    })
})


function daily(){
    time.forEach((t,index)=>{
        t.innerHTML=arr[index].timeframes.daily.current+'hrs'
    })
    hr.forEach((h,index)=>{
        h.innerHTML='Yesterday - '+arr[index].timeframes.daily.previous+'hrs'
    })
}

function weekly(){
    time.forEach((t,index)=>{
        t.innerHTML=arr[index].timeframes.weekly.current+'hrs'
    })
    hr.forEach((h,index)=>{
        h.innerHTML='Last Week - '+arr[index].timeframes.weekly.previous+'hrs'
    })
}
weekly()

function monthly(){
    time.forEach((t,index)=>{
        t.innerHTML=arr[index].timeframes.monthly.current+'hrs'
    })
    hr.forEach((h,index)=>{
        h.innerHTML='Last Month - '+arr[index].timeframes.monthly.previous+'hrs'
    })
}