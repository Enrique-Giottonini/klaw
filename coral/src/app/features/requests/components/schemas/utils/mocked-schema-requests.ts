import { SchemaRequest } from "src/domain/schema-request";
import { transformGetSchemaRequests } from "src/domain/schema-request/schema-request-transformer";
import { SchemaRequestApiResponse } from "src/domain/schema-request/schema-request-types";

const mockedSchemaRequests: SchemaRequest[] = [
  {
    req_no: 1014,
    topicname: "testtopic-first",
    environment: "1",
    environmentName: "BRG",
    schemaversion: "1.0",
    teamname: "NCC1701D",
    teamId: 1701,
    appname: "App",
    schemafull: "",
    username: "jlpicard",
    requesttime: "1987-09-28T13:37:00.001+00:00",
    requesttimestring: "28-Sep-1987 13:37:00",
    requestStatus: "CREATED",
    requestOperationType: "CREATE",
    remarks: "asap",
    approvingTeamDetails:
      "Team : NCC1701D, Users : jlpicard, worf, bcrusher, geordilf",
    approvingtime: "2022-11-04T14:54:13.414+00:00",
    totalNoPages: "4",
    allPageNos: ["1"],
    currentPage: "1",
    deletable: true,
    editable: false,
    forceRegister: false,
  },
  {
    req_no: 1013,
    topicname: "testtopic-second",
    environment: "2",
    environmentName: "SIC",
    schemaversion: "1.0",
    teamname: "NCC1701D",
    teamId: 1701,
    appname: "App",
    schemafull: "",
    username: "bcrusher",
    requesttime: "1994-23-05T13:37:00.001+00:00",
    requesttimestring: "23-May-1994 13:37:00",
    requestStatus: "APPROVED",
    requestOperationType: "PROMOTE",
    remarks: "asap",
    approvingTeamDetails:
      "Team : NCC1701D, Users : jlpicard, worf, bcrusher, geordilf",
    approvingtime: "2022-11-04T14:54:13.414+00:00",
    totalNoPages: "4",
    allPageNos: ["1"],
    currentPage: "1",
    deletable: true,
    editable: false,
    forceRegister: false,
  },
  {
    req_no: 1042,
    topicname: "testtopic-third",
    environment: "2",
    environmentName: "SEC",
    schemaversion: "1.0",
    teamname: "NCC1701D",
    teamId: 1701,
    appname: "App",
    schemafull: "",
    username: "worf",
    requesttime: "1994-23-05T13:37:00.001+00:11",
    requesttimestring: "23-May-1994 13:37:11",
    requestStatus: "DECLINED",
    requestOperationType: "UPDATE",
    remarks: "asap",
    approvingTeamDetails:
      "Team : NCC1701D, Users : jlpicard, worf, bcrusher, geordilf",
    approvingtime: "2022-11-04T14:54:13.414+00:00",
    totalNoPages: "4",
    allPageNos: ["1"],
    currentPage: "1",
    deletable: false,
    editable: false,
    forceRegister: false,
  },
];

const mockedApiResponseSchemaRequests: SchemaRequestApiResponse =
  transformGetSchemaRequests(mockedSchemaRequests);

export { mockedSchemaRequests, mockedApiResponseSchemaRequests };
