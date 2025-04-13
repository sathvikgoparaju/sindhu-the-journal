import React from 'react';
import { BookOpen, FileText, Info, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Sindhu The Journal</h1>
            <nav className="flex space-x-8">
              <a href="#about" className="flex items-center text-gray-700 hover:text-gray-900">
                <Info className="w-5 h-5 mr-1" />
                About
              </a>
              <a href="#instructions" className="flex items-center text-gray-700 hover:text-gray-900">
                <FileText className="w-5 h-5 mr-1" />
                Instructions
              </a>
              <a href="#submission" className="flex items-center text-gray-700 hover:text-gray-900">
                <Send className="w-5 h-5 mr-1" />
                Submission
              </a>
              <a href="#editorial" className="flex items-center text-gray-700 hover:text-gray-900">
                <BookOpen className="w-5 h-5 mr-1" />
                Editorial
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About SINDHU</h2>
          <div className="bg-white shadow rounded-lg p-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                SINDHU is an independent academic journal. Articles published here are Open Access articles distributed under the terms of the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License, which permits unrestricted non-commercial use, distribution, and reproduction in any medium, provided the original author and source are credited.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                All authors retain their copyright. We also permit and encourages authors to share their submitted versions (preprints) and accepted versions (postprints) freely under the CC BY-NC-SA 4.0 license while providing bibliographic details that credit, if applicable.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Issues */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Issues</h2>
          
          {/* Issue 1 */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Issue 1</h3>
            <div className="space-y-4">
              <article className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-medium text-gray-900">The Female Onlooker</h4>
                <p className="text-gray-600 mt-2">A translated poem originally written in Malayalam and translated into English by Jintu Alias. These poems reflect themes relevant to LGBTIQA+ identities, as observed and expressed from a female perspective.</p>
              </article>
              <article className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-medium text-gray-900">Colouring the Rainbow</h4>
                <p className="text-gray-600 mt-2">By Neethu Das. This article highlights how LGBTQ+ narratives often ignore caste and class dynamics, focusing primarily on upper-caste experiences. It calls out the lack of intersectionality in queer discourse.</p>
              </article>
              <article className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-medium text-gray-900">Celebrate Yourself</h4>
                <p className="text-gray-600 mt-2">An interview with a proud transgender person named Paras Dogra. It discusses the various challenges he faced in life, including issues related to gender, sexuality, and acceptance. Overall, the article gives insight into his journey through the lens of this interview.</p>
              </article>
            </div>
          </div>

          {/* Issue 2 */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Issue 2</h3>
            <div className="space-y-4">
              <article className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-medium text-gray-900">A Witch Like You</h4>
                <p className="text-gray-600 mt-2">Written by Shruti Sareen, this poem primarily highlights human emotions and memories. Each line in the poem is deeply reflective, helping the reader understand what is good and what is bad.</p>
              </article>
              <article className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-medium text-gray-900">Digital Privacy in the Modern Age</h4>
                <p className="text-gray-600 mt-2">Examining the challenges of maintaining privacy in a connected world.</p>
              </article>
              <article className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-medium text-gray-900">The Evolution of Remote Work</h4>
                <p className="text-gray-600 mt-2">How workplace dynamics are changing in the post-pandemic era.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2025 Sindhu The Journal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;