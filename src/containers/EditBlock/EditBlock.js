import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Rodal from 'rodal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './editBlock.css';
import Header from "../../components/Header";
import 'rodal/lib/rodal.css';
import { updateBlock } from "../FlowCanvas/Actions";
import { toggleEditmodal } from "./Actions";

const EditModalContainer = styled.div`
    height: 100%;
`;
const EditModalWrapper = styled.div`
    height: 100%;
`;
const customStyles = {
    width: '40%',
    height: '55%',
    backgroundColor: '#423c55',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    paddingBottom: "15px"
    
};

const FieldHeader = styled.div`
    -webkit-text-stroke: 1px rgb(112, 112, 112);
  font-family: HelveticaNeue;
  font-size: 1.3em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: rgb(237, 237, 237);
  margin-top: 20px;
`;
const MaxAnswerContainer = styled.div`
    height: 20%;
`;
const MaxAnswerlength = styled.div`
    margin-top: 25px;
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const MaxLengthText = styled(FieldHeader)`
    margin-left: 10px;
    margin-top: 0;
`;
const FormErrorMessage = styled.h3`
    margin-top: 5px;
    color: red;
    font-size: 1em;
`;

const ContentContainer = styled.div`
    height: 40%
`;


class EditBlock extends React.PureComponent {

    hide = () => {
        this.props.closeModal();
    }

    render() {
        const initialValues = this.props.editBlock.id ? { content: this.props.questionBlocks[this.props.editBlock.id].content, limit: this.props.questionBlocks[this.props.editBlock.id].limit, limitValue: this.props.questionBlocks[this.props.editBlock.id].limitValue } : { content: "", limit: false, limitValue: null, randomHack: Math.random() * 100 };
        return <div>
            <Rodal visible={this.props.displayEditModal} onClose={this.hide} className="editModal" customStyles={customStyles} measure="px" closeMaskOnClick={false}>
                <EditModalContainer>
                    <EditModalWrapper>
                        <Header title={(this.props.editBlock.id ? "Edit " : "New ") + (this.props.editBlock.blockType !== "endConvoBlock" ? "Q/A Block" : "End Conversation Block")} />
                        <Formik
                            initialValues={initialValues}
                            enableReinitialize
                            validate={values => {
                                const errors = {};
                                if (!values.content) {
                                    errors.content = 'Question Content is required!';
                                }
                                if (values.limit && (!values.limitValue || values.limitValue < 0 || !Number.isInteger(Number(values.limitValue)))) {
                                    errors.limitValue = 'Invalid Limit Value!';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                this.props.submitForm(values, this.props.editBlock.index, this.props.editBlock.id, this.props.editBlock.blockType);
                                setSubmitting(false);
                                resetForm();
                                this.props.closeModal();
                            }}
                        >
                            {({ isSubmitting, values }) => (
                                <Form className="editForm">
                                    <ContentContainer>
                                        <FieldHeader>Title</FieldHeader>
                                        <Field type="textarea" name="content"
                                            as="textarea" className="formTextArea"
                                            value={values.content || ''} />
                                        <ErrorMessage name="content" component={FormErrorMessage} />
                                    </ContentContainer>
                                    {this.props.editBlock.blockType !== "endConvoBlock" ?
                                        <MaxAnswerContainer >
                                            <MaxAnswerlength>
                                                <Field type="checkbox" name="limit" className="formCheckbox" />
                                                <MaxLengthText>Set Max Answer Length</MaxLengthText>
                                                {values.limit ? <Field type="textarea" name="limitValue" className="maxLengthQuestion" /> : <div />}
                                            </MaxAnswerlength>
                                            <ErrorMessage name="limitValue" component={FormErrorMessage} />
                                        </MaxAnswerContainer >
                                        : <div />
                                    }
                                    <button type="submit" disabled={isSubmitting} className="formSubmitButton">
                                        Done
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </EditModalWrapper>
                </EditModalContainer>
            </Rodal>
        </div>;
    }
}

const mapSateToProps = (state) => {
    return {
        ...state.EditBlock,
        ...state.FlowCanvas
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (formData, index, id, type) => {
            dispatch(updateBlock(formData.content, formData.limit, formData.limitValue, index, id, type));
        },
        closeModal: () => {
            dispatch(toggleEditmodal(false, null, null, null));
        }
    };
};

export default connect(mapSateToProps, mapDispatchToProps)(EditBlock);
