import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <>
            <ol class="flex justify-center gap-1 text-xs font-medium">
                <li>
                    <Link
                        to="#"
                        class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                    >
                        <span class="sr-only">Prev Page</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </Link>
                </li>

                <li>
                    <Link
                        to="#"
                        class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                    >
                        1
                    </Link>
                </li>

                <li
                    class="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                >
                    2
                </li>

                <li>
                    <Link
                        to="#"
                        class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                    >
                        3
                    </Link>
                </li>

                <li>
                    <Link
                        to="#"
                        class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                    >
                        4
                    </Link>
                </li>

                <li>
                    <Link
                        to="#"
                        class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
                    >
                        <span class="sr-only">Next Page</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </Link>
                </li>
            </ol>
        </>
    );
};

export default Pagination;