const encodeBasicAuth = (username, password) => {
  const credentials = `${username}:${password}`;
  // Binary to ASCII.
  return Buffer.from(credentials).toString("base64");
}

const monthMap = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
};


// A function to extract data from the last 6 months.
const latestSixMonths = (history) => {
  return (
    history.map(entry => ({
      ...entry,
      date: new Date(entry.year, monthMap[entry.month], 1) /* Construct a `date` field to do the sorting */
    }))
      .sort((a, b) => b.date - a.date)  /* Sort in Descending Order */
      .slice(0, 6)) /* Extract the first 6 elements */
    .reverse()  /* Reverse to go from oldest to latest */
}

// Transform the Diagnostic History data into a more compact form for easier data visualization
const transformDiagnosisHistory = (data) => {
  return {
    date: data.map(entry => entry.date),
    systolic: data.map(entry => entry.blood_pressure.systolic.value),
    diastolic: data.map(entry => entry.blood_pressure.diastolic.value)
  }
}

// Get the Latest BPs, Heart Rate, Respiratory Rate, Temperature
// `data` is the final dictionary in the `disgnosis_history` list.
const getLatestStats = (data) => {
  return   {
    systolic: {
      value: data.blood_pressure.systolic.value,
      level: data.blood_pressure.systolic.levels
    },
    diastolic: {
      value: data.blood_pressure.diastolic.value,
      level: data.blood_pressure.diastolic.levels
    },
    heart_rate: {
      value: data.heart_rate.value,
      level: data.heart_rate.levels
    },
    respiratory_rate: {
      value: data.respiratory_rate.value,
      level: data.respiratory_rate.levels
    },
    temperature: {
      value: data.temperature.value,
      level: data.temperature.levels
    }
  }
}

const transformPersonData = (patients) => { 
  // Isolate the data for "Jessica Taylor"
    const jessica = patients.find(patient => patient.name === "Jessica Taylor");

    // Get data of "Jessica Taylor" for the last 6 months.
    // Transform the data into a simple list format.
    const last6Months = latestSixMonths(jessica.diagnosis_history);
    const simpleDiagnosisHistory = transformDiagnosisHistory(last6Months);

    // Isolate the final month to get the latest stats to be displayed on the Dashboard.
    const final_month = last6Months[last6Months.length - 1];
    const latestStats = getLatestStats(final_month);
    
    return { ...jessica, diagnosis_history: simpleDiagnosisHistory, latest_stats: latestStats };
}

const summarizePeople = (data) => { 
  return data.map(person => ({
      name: person.name,
      gender: person.gender,
      age: person.age,
      profile_picture: person.profile_picture
    }));
}

const generatePersonSummary = (activePerson) => { 
  return {
    name: activePerson.name,
    date_of_birth: activePerson.date_of_birth,
    gender: activePerson.gender,
    phone_number: activePerson.phone_number,
    emergency_contact: activePerson.emergency_contact,
    insurance_type: activePerson.insurance_type,
    profile_picture: activePerson.profile_picture
  }
}

module.exports = {
  encodeBasicAuth,
  transformPersonData,
  summarizePeople,
  generatePersonSummary
};
