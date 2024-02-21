import style from "@/app/components/contents/style.module.scss";
import * as fileHelper from "@/app/utils/FileHelper";

export default async function Contact() {
  const contactJson = await fileHelper.readFile("/data/contact-info.json");
  const contactData = Object.entries(
    JSON.parse(contactJson.length !== 0 ? contactJson : "{}")
  );

  return (
    <div id="contact" className={`${style.about} my-2`}>
      <h2>Contact</h2>
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        {contactData.length !== 0 &&
          contactData.map((contact: any) => (
            <div key={contact[0]}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {contact[0]}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {Array.isArray(contact[1]) ? (
                  contact[1].map((value) => (
                    <li key={value} className="mb-4">
                      {value}
                    </li>
                  ))
                ) : (
                  <li className="mb-4">{contact[1]}</li>
                )}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
