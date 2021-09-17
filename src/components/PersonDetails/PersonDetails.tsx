/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

interface IProps {
    personName: string;
    personEmail: string;
    personPhone: string;
    countNumber: number;
    handleRemove: (personEmail: string) => void;
}

const PersonDetails = ({
    personName,
    personEmail,
    personPhone,
    countNumber,
    handleRemove,
}: IProps) => {
    return (
        <tr>
            <th scope="row">{countNumber}</th>
            <td>{personName}</td>
            <td>{personEmail}</td>
            <td>{personPhone}</td>
            <td className="text-center">
                <button
                    onClick={() => handleRemove(personEmail)}
                    className="btn"
                >
                    Delate
                </button>
            </td>
        </tr>
    );
};

export default PersonDetails;
