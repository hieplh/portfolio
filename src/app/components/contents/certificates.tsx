import style from "@/app/components/contents/style.module.scss";
import * as fileHelper from "@/app/utils/FileHelper";
import Image from "next/image";

export default async function Certificates() {
  const certificates = await fileHelper.readDir("/certificates");

  return (
    <div id="certificates" className={`${style.about} my-2`}>
      <h2>Certificates</h2>
      <div className="mt-2 grid grid-cols-2 gap-2 justify-items-center">
        {certificates &&
          certificates.map((certificate, index) =>
            certificate.lastIndexOf(".pdf") !== -1 ? (
              <object
                key={index}
                width="100%"
                height="500"
                data={"/certificates/" + certificate}
                type="application/pdf"
              >
                {" "}
              </object>
            ) : (
              <Image
                key={index}
                src={"/certificates/" + certificate}
                alt="avatar"
                quality={100}
                width={500}
                height={500}
                style={{ width: "auto", height: "auto" }}
                className="relative"
              />
            )
          )}
      </div>
    </div>
  );
}
