import style from "@/app/components/contents/style.module.scss";
import validator from "validator";
import Link from "next/link";
import * as fileHelper from "@/app/utils/FileHelper";

interface Project {
  name: string;
  descriptions?: string[];
  additionalInformation: Object;
}

interface WorkingExperience {
  duration: string;
  company: string;
  title: string;
  projects: Project[];
  nonProjects?: string[];
}

const projectLayout = (typeOfProject: string, data: any) => {
  return (
    data.length !== 0 && (
      <div className="w-1/2 text-balance box-border overflow-hidden">
        <h2 className={style["header-title"]}>{typeOfProject}</h2>
        <table className="translate-x-8 table-auto">
          <tbody>
            {data.map((data: WorkingExperience) => (
              <tr
                key={data.company}
                className={`border-b`}
                style={{ borderColor: "#607d8b" }}
              >
                <td width={120}>{data.duration}</td>
                <td className="py-4">
                  <p>
                    <span className="font-bold">{data.company}</span>
                    &nbsp;-&nbsp;
                    <span className="font-normal">{data.title}</span>
                  </p>
                  <p className="font-bold">Projects</p>
                  {data.projects &&
                    data.projects.map((project: Project, index: number) => (
                      <div
                        key={project.name}
                        className={`${
                          index >= 1 ? "mt-3" : ""
                        } border border-dashed`}
                      >
                        <p className="font-bold px-4">{project.name}</p>
                        {project.descriptions && (
                          <ul className="list-disc px-6">
                            {project.descriptions.map((description) => (
                              <li key={description}>{description}</li>
                            ))}
                          </ul>
                        )}
                        {project.additionalInformation && (
                          <table className="table-auto">
                            <tbody>
                              {Object.entries(
                                project.additionalInformation
                              ).map((addInfo, index) => (
                                <tr
                                  key={addInfo[0]}
                                  style={{ borderColor: "#607d8b" }}
                                  className={`${
                                    project.descriptions || index >= 1
                                      ? "border-t"
                                      : ""
                                  }`}
                                >
                                  <td>
                                    {addInfo[0]
                                      .split("_")
                                      .map(
                                        (e) =>
                                          e.substring(0, 1).toUpperCase() +
                                          e.substring(1)
                                      )
                                      .join(" ")}
                                  </td>
                                  <td className="px-6">
                                    {(() => {
                                      var value;
                                      if (Array.isArray(addInfo[1])) {
                                        if (addInfo[1].length >= 2) {
                                          return (
                                            <ul className="list-disc">
                                              {addInfo[1].map((vInfo: any) => {
                                                return (
                                                  <li key={vInfo}>
                                                    {validator.isURL(vInfo) ? (
                                                      <Link href={vInfo}>
                                                        {vInfo}
                                                      </Link>
                                                    ) : (
                                                      vInfo
                                                    )}
                                                  </li>
                                                );
                                              })}
                                            </ul>
                                          );
                                        } else {
                                          value = addInfo[1].join("");
                                        }
                                      } else {
                                        value = addInfo[1];
                                      }
                                      return validator.isURL(
                                        value.toString()
                                      ) ? (
                                        <Link href={value}>{value}</Link>
                                      ) : (
                                        value
                                      );
                                    })()}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </div>
                    ))}
                  {data.nonProjects && data.nonProjects.length >= 1 && (
                    <>
                      <p className="font-bold mt-2">Non-Project</p>
                      <ul className="px-4">
                        {data.nonProjects.map(
                          (value: string, index: number) => (
                            <li key={index}>{value}</li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default async function Projects() {
  const companyJson = await fileHelper.readFile("/data/company-projects.json");
  const companyProjects = JSON.parse(
    companyJson.length !== 0 ? companyJson : "[]"
  );
  const individualJson = await fileHelper.readFile(
    "/data/individual-projects.json"
  );
  const individualProjects = JSON.parse(
    individualJson.length !== 0 ? individualJson : "[]"
  );
  return (
    <div id="projects" className={`${style.about} my-2 flex flex-row`}>
      {projectLayout("Company Project", companyProjects)}
      {projectLayout("Individual Project", individualProjects)}
    </div>
  );
}
