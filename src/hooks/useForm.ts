

export const useForm = () => {
  const forms = localStorage.getItem("forms");

  if (!forms) return [];

  const formJSON = JSON.parse(forms);

  return formJSON;
};
