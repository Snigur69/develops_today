import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { string, object } from "yup";
import styled from "styled-components";

import { addNewPost } from "../../store/actions/newPostActions";
import BasicLayout from "../../containers/BasicLayout";

const StyledButton = styled.button`
    font-size: 16px;
    color: #fff;
    padding: 7px 30px;
    background: blue;
    border: 1px solid blue;
    border-radius: 5px;
    cursor: pointer;
    :disabled {
        background: gray;
        border: 1px solid gray;
    }
`;

const StyledTextarea = styled.textarea`
    display: block;
    min-height: 100px;
    font-size: 14px;
    padding: 15px;
    border: 1px solid grey;
    width: 100%;
    margin: 15px 0 0 0;
    border-radius: 5px;
    :disabled {
        background: #ececec;
        border: 1px solid gray;
    }
`;

const StyledInput = styled.input`
    display: block;
    min-height: 30px;
    font-size: 14px;
    padding: 15px;
    border: 1px solid grey;
    width: 100%;
    margin: 15px 0 0 0;
    border-radius: 5px;
    :disabled {
        background: #ececec;
        border: 1px solid gray;
    }
`;

const StyledFieldWrapper = styled.div`
    margin: 20px auto;
    text-align: left;
    > label {
        font-weight: bold;
        font-size: 16px;
    }
    > p {
        color: red;
        font-style: italic;
        font-weight: bold;
        text-align: center;
    }
`;

const AddNewPost: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <BasicLayout title="Add new Post">
            <h1>Add new Post!</h1>
            <Formik
                initialValues={{
                    title: "",
                    body: "",
                }}
                validationSchema={object().shape({
                    title: string().required("This field is required!"),
                    body: string().required("This field is required!"),
                })}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(post) => {
                    dispatch(addNewPost(post));
                }}
            >
                {({
                    errors,
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <StyledFieldWrapper>
                            <label htmlFor="title">Post Title:</label>
                            <StyledInput
                                disabled={isSubmitting}
                                type="text"
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            {errors.title && <p>{errors.title}</p>}
                        </StyledFieldWrapper>

                        <StyledFieldWrapper>
                            <label htmlFor="body">Post Body:</label>
                            <StyledTextarea
                                disabled={isSubmitting}
                                name="body"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.body}
                            />
                            {errors.body && <p>{errors.body}</p>}
                        </StyledFieldWrapper>

                        <div>
                            <StyledButton disabled={isSubmitting} type="submit">
                                Add new Post
                            </StyledButton>
                        </div>
                    </form>
                )}
            </Formik>
        </BasicLayout>
    );
};

export default AddNewPost;
