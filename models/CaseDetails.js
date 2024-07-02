const mongoose = require('mongoose');

const CaseDetailsSchema = new mongoose.Schema
(
    {
        client_id: {
            type: Object(),
            required: true
        },


        isResolved: {
            type: String,
            default: "N"
        },


        lawyer_id: {
            type: Object()
        },
        isLawyerAssigned: {
            type: String,
            default: "Y"
        },
        isCaseAccepted: {
            type: String,
            default: "TBD"
        },
        court_case_no: {
            type: String,
            unique: true
          },
        h_date: {
            type: Date,
            default: Date.now
          },
        case_type: {
            type: String
        },
        case_name: {
            type: String,
            required: true
        },
        case_descp: {
            type: String,
            required: true
        },


        court_type: {
            type: String
        },
        h_date: {
            type: Date
        }
    }
);

CaseDetailsSchema.pre('save', function(next) {
    const caseDetails = this;
    if (!caseDetails.court_case_no) {
      const courtCaseNo = `CC-${Date.now().toString(36).substr(2, 9)}`;
      caseDetails.court_case_no = courtCaseNo;
    }
    next();
  });
  const CaseDetails = mongoose.model('CaseDetails', CaseDetailsSchema);

  module.exports = CaseDetails;