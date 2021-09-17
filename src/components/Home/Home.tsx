import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PersonDetails from "../PersonDetails/PersonDetails";

type Inputs = {
    name: string;
    email: string;
    number: string;
};

const Home = () => {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const [persons, setPersons] = useState<Inputs[]>([]);
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setPersons([...persons, data]);
        reset();
    };
    const handleRemove = (email: string) => {
        const newPerson = persons.filter((person) => person.email !== email);
        setPersons(newPerson);
    };
    let count = 1;

    return (
        <div>
            <h1 className="text-center mt-4">Add Person</h1>
            <div className="input-field container ">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="name-field p-2">
                        <input
                            className="form-control w-50 m-auto"
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Your name"
                        />
                    </div>
                    <div className="email-field p-2 text-center">
                        <input
                            className="form-control w-50 m-auto"
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="phone-field p-2 text-center">
                        <input
                            className="form-control w-50 m-auto"
                            type="number"
                            {...register("number", { required: true })}
                            placeholder="Your phone number"
                        />
                    </div>
                    <div className="text-center">
                        <input
                            className="btn btn-danger"
                            type="submit"
                            value="SUBMIT"
                        />
                    </div>
                </form>
            </div>
            <div className="person-details container mt-4">
                {persons.length > 0 ? (
                    <table className="table table-bordered table-border">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PHONE</th>
                                <th className="text-center" scope="col">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons.map((person, id) => (
                                <PersonDetails
                                    key={id}
                                    personName={person.name}
                                    personEmail={person.email}
                                    personPhone={person.number}
                                    countNumber={count++}
                                    handleRemove={handleRemove}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Home;
