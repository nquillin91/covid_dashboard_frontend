const vaccineInfo = {
    "pfizerVaccineAllocations": {
        "weeklyData": [
            {
                "week_of_allocations": "2021-03-22T00:00:00.000",
                "_1st_dose_allocations": "136890",
                "_2nd_dose_allocations": "1362332"
            },
            {
                "week_of_allocations": "2021-03-15T00:00:00.000",
                "_1st_dose_allocations": "134550",
                "_2nd_dose_allocations": "13432"
            },
            {
                "week_of_allocations": "2021-03-08T00:00:00.000",
                "_1st_dose_allocations": "125190",
                "_2nd_dose_allocations": "1251"
            },
            {
                "week_of_allocations": "2021-03-01T00:00:00.000",
                "_1st_dose_allocations": "114660",
                "_2nd_dose_allocations": "114"
            },
            {
                "week_of_allocations": "2021-02-22T00:00:00.000",
                "_1st_dose_allocations": "994",
                "_2nd_dose_allocations": "994504"
            },
            {
                "week_of_allocations": "2021-02-15T00:00:00.000",
                "_1st_dose_allocations": "63373",
                "_2nd_dose_allocations": "633"
            }
        ]
    },
    "modernaVaccineAllocations": {
        "weeklyData": [
            {
                "week_of_allocations": "2021-03-22T00:00:00.000",
                "_1st_dose_allocations": "98700",
                "_2nd_dose_allocations": "987"
            },
            {
                "week_of_allocations": "2021-03-15T00:00:00.000",
                "_1st_dose_allocations": "34232",
                "_2nd_dose_allocations": "0"
            },
            {
                "week_of_allocations": "2021-03-08T00:00:00.000",
                "_1st_dose_allocations": "23233",
                "_2nd_dose_allocations": "4434"
            },
            {
                "week_of_allocations": "2021-03-01T00:00:00.000",
                "_1st_dose_allocations": "876",
                "_2nd_dose_allocations": "13434"
            },
            {
                "week_of_allocations": "2021-02-22T00:00:00.000",
                "_1st_dose_allocations": "5435",
                "_2nd_dose_allocations": "8767"
            },
            {
                "week_of_allocations": "2021-02-15T00:00:00.000",
                "_1st_dose_allocations": "233",
                "_2nd_dose_allocations": "98700"
            }
        ]
    },
    "weeklyVaccinations": [
        {
            "AdministeredCount": "806682",
            "AdministeredCountChange": "14688",
            "AdministeredCountRollAvg": "20121.000000",
            "PersonsFullyVaccinated": "308458",
            "Report_Date": "2021-03-15T00:00:00",
            "PctVaccinatedPopulation": "0.1846547280883928423490977366"
        },
        {
            "AdministeredCount": "828078",
            "AdministeredCountChange": "21396",
            "AdministeredCountRollAvg": "20385.000000",
            "PersonsFullyVaccinated": "316902",
            "Report_Date": "2021-03-16T00:00:00",
            "PctVaccinatedPopulation": "0.1284343443"
        },
        {
            "AdministeredCount": "846082",
            "AdministeredCountChange": "18004",
            "AdministeredCountRollAvg": "20041.000000",
            "PersonsFullyVaccinated": "324605",
            "Report_Date": "2021-03-17T00:00:00",
            "PctVaccinatedPopulation": "0.1311800893837500035360693215"
        },
        {
            "AdministeredCount": "872999",
            "AdministeredCountChange": "26917",
            "AdministeredCountRollAvg": "20858.000000",
            "PersonsFullyVaccinated": "333956",
            "Report_Date": "2021-03-18T00:00:00",
            "PctVaccinatedPopulation": "0.1349590361523686208804287252"
        }
    ]
};

function getVaccineData() {
    const requestOptions = { 
    	method: 'GET',
    	headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') }
    };

    return fetch(`https://covid-dashboard-backend-se430.herokuapp.com/vaccine-data`, requestOptions).then(response => {
	    response.text().then(text => {
	      const data = text && JSON.parse(text);

	      return data;
	    })
	});
}

export const vaccinationDataService = {
    getVaccineData
};

export default vaccineInfo;