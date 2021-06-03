function remove()  //function to show the nav bar
{
    $(document).ready(function()
    {
        
        $('nav').show(5000);

    })
}
function darkMode()//function to chnage to dark mode
{
    $(document).ready(function()
    {
        $('body').addClass('black');
       
    })
}
function cancel()//function to cancel the nav bar options
{
    $(document).ready(function()
    {
        $('nav').hide();
       
    })
}
function showwork()// function to show projects photos in the work web page
{
   
    $(document).ready(function()
    { $('.photos-works').hide();
        $('.photos-works').show(4000);
       
    })
}
function hideAbout()
{
    $(document).ready(function(){
       
            $('p').removeClass('hidden-about');
           let l = $('p').addClass('.about');
           l.hide()
            l.show(6000);
            $('.read').hide();
       
       
    })
    
}