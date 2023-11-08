import countryData from './data/country.json';

export const confirmObj = {
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  html: 'You can use <b>bold text</b>',
  confirmButtonText: 'Yes !',
  cancelButtonText: 'No',
};

export const status = {
  success: 200,
  noContent: 204,
  badRequest: 400,
  notFound: 404,
  severError: 500,
  conflict: 409,
  methodNotAllow: 405,
};

export const countries = countryData.map((country) => ({
  country: country.name,
  code: country.code,
  state: country.states,
}));

export const countriesOption = countryData.map((country) => ({
  countryName: country.country,
  countryCode: country.code,
  value: country.country,
  label: country.country,
  states: country?.state?.map((state) => ({
    countryName: country.country,
    countryCode: country.code,
    stateName: state.name,
    stateCode: state.code,
    value: state.name,
    label: state.name,
  })),
}));
