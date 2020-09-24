const whatdoYouDo=function(job,firstName){
    switch(job)
    {
        case 'Teacher':
            return firstname+ ' Teching Profession';
        case 'driver':
                return firstName+'Driving Job';
        case 'Doctor':
            return firstname+'Doctor Profession';
            default:
                return firstName+'Does something';
    }
}
console.log(whatdoYouDo('raj','raj'));