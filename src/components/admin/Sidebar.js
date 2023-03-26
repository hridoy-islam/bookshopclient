import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const pages = [
        {
            path: '/dashboard/books',
            element: 'Books',
            children: [
                {
                    path: '/addbook',
                    element: 'Add New Book'
                }
            ]
        },
        {
            path: '/dashboard/authors',
            element: 'Authors',
        },
        {
            path: '/dashboard/publisher',
            element: 'Publisher'
        }
    ]
    return (
        <div class="flex h-screen flex-col justify-between border-r bg-white">
            <div class="px-4 py-6">
                <h1>lOGO</h1>
                <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
                    
                    {pages.map((page, i) => <>
                    <Link key={i} to={page.path} class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
                        <span class="text-sm font-medium"> {page.element} </span>
                    </Link>
                    </>)}

                    <details class="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-medium"> Teams </span>
                            </div>

                            <span class="shrink-0 transition duration-300 group-open:-rotate-180">+
                            </span>
                        </summary>

                        <nav aria-label="Teams Nav" class="mt-2 flex flex-col px-4">
                            <Link
                                class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span class="text-sm font-medium"> Banned Users </span>
                            </Link>
                        </nav>
                    </details>
                </nav>
            </div>

            <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <Link class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <button
                        type="submit"
                        class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>

                        <span class="text-sm font-medium"> Logout </span>
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Sidebar;