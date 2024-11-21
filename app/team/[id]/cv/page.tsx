"use client"
import PdfViewer from "@/components/ui/pdf-viewer";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import React from "react";
const Cv: React.FC = () => {

  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.id;


  const supervising_students = [
    {
      id: "lampros_karachristos",
      cv_file: "/cvs/lampros_karachristos.pdf",
    },
    {
      id: "fotis_rentzis",
      cv_file: "/cvs/fotis_rentzis.pdf",
    },
    {
      id: "panagiotis_diamantis",
      cv_file: "/cvs/panagiotis_diamantis.pdf",
    },
    {
      id: "fillipos_stamos",
      cv_file: "/cvs/fillipos_stamos.pdf",
    },
    {
      id: "christos_rompovilas",
      cv_file: "/cvs/christos_rompovilas.pdf",
    },
    {
      id: "yiannis_tokmakidis",
      cv_file: "/cvs/yiannis_tokmakidis.pdf",
    },
    {
      id: "athanasios_daoulas",
      cv_file: "/cvs/athanasios_daoulas.pdf",
    },
  ];

  const student = supervising_students.find((s) => s.id === id);

  return (
    <>
      <PdfViewer url={student?.cv_file} />
    </>
  );
};
export default Cv;