import Link from "next/link";

const PrivacyStatement = () => {

  const Heading = ({text} : {text: string}) => (
    <h3 className="font-bold">{text}</h3>
  );

  const Text = ({text} : {text: string[]}) => (
    <>
      {text.map((para, i) => (
        <p key={i}>
          {para}
        </p>
      ))}
    </>
  );

  const List =({items} : {items : string[]}) => (
    <ul className="list-disc pl-6">
      {items.map((item, i) => (
        <li key={i}>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="w-full max-w-5xl mx-auto text-darkGrey text-xl flex flex-col gap-4 py-12 px-6">
      <Text text={[
        'Willship International Pty. Ltd. ACN 169 722 605 (Willship) takes your privacy seriously and is committed to responsible privacy practices.',
        'Willship seeks to comply with relevant laws, including the Privacy Act 1988 (Cth) (Privacy Act) and the EU General Data Protection Regulation (GDPR), where applicable.',
        'This policy describes how Willship manages your personal information including details of what types of personal information Willship collects, how Willship collects your personal information, the purposes for which Willship uses your personal information and to whom your personal information is disclosed.',
      ]} />
      <Heading text='1. What is personal information?' />
      <Text text={[
        'In this policy “personal information” has the meaning set out in the Privacy Act. Essentially, personal information is information or an opinion about an individual who is reasonably identifiable.'
      ]} />
      <Heading text='2. What types of personal information do we collect?' />
      <Text text={[
        'The types of personal information Willship collects about you will depend on the purpose for which the information is collected. Willship may collect the following types of personal information:'
      ]} />
      <List items={[
        'first name and last name;',
        'contact information; and',
        'email address',
      ]} />
      <Text text={[
        'Willship also collects general analytics and other technical information (such as your IP address, device type, unique device identification numbers, browser types, Internet Service Provider details, geolocation data, browsing preferences, searches, and usage of Willship’s websites or products) arising from your use of Willship’s websites or products.',
        'In addition to the types of personal information identified above, Willship may collect personal information as otherwise permitted or required by law.',
      ]} />
      <Heading text='3. How do we collect personal information?' />
      <Text text={[
        'Often Willship will collect your personal information directly from you, including when you:'
      ]} />
      <List items={[
        'use Willship’s website, products or services;',
        'apply to work with Willship or are engaged by Willship as a contractor;',
        'communicate with Willship by email, by telephone, in person, via a website or otherwise.',
      ]} />
      <Text text={[
        'In some cases Willship may also collect personal information from:'
      ]} />
      <List items={[
        'publicly available sources;',
        'entities with which Willship conducts business; and',
        'other third parties (for example, from referees if you apply for a position as an employee or contractor with us).',
      ]} />
      <Heading text='4. Cookies' />
      <Text text={[
        'Willship uses cookies and similar technologies to recognise you and/or your devices across our website, products or services. You can control your cookie preferences using the consent box when you first visit our website or at any time through:',
        'Why do we collect, use and disclose personal information?',
        'In general Willship collects, uses and discloses your personal information for purposes connected with its business operations.',
        'Willship will only collect, use, and disclose personal information about you if it has lawful basis to do so, for example:',
      ]} />
      <List items={[
        'where you have given Willship your consent;',
        'where processing of your personal information is necessary for the performance of a contract with you;',
        'to meet Willship’s legal obligations; and',
        'to pursue Willship’s legitimate business interests.',
      ]} />
      <Text text={[
        'Willship may use or disclose your personal information:'
      ]} />
      <List items={[
        'for the purposes for which Willship collected it (and related purposes which would be reasonably expected by you);',
        'for other purposes to which you have consented; and',
        'as otherwise authorised or required by law.',
      ]} />
      <Text text={[
        'Some of the specific purposes for which Willship collects, uses and discloses personal information are as follows:'
      ]} />
      <List items={[
        'to provide its products and services to its users;',
        'to enable the proper operation and functionality of its products and services;',
        'to improve its products and services;',
        'to verify your identity (for example, if you request access to the personal information Willship holds about you);',
        'to consider you for a job at Willship (whether as an employee or contractor) or other relationships with Willship;',
        'to provide goods or services to you or to receive goods or services from you;',
        'to address any issues or complaints that Willship has or you have regarding our relationship;',
        'to comply with its legal obligations;',
        'to develop and improve the quality of its websites and products and customise its websites and products according to your preferences, tailor search results, and show relevant advertising;',
        'for direct marketing purposes (see the “Direct marketing” section below); and',
        'to contact you regarding the above, including via electronic messaging such as SMS and email, by mail, by phone or in any other lawful manner.',
      ]} />
      <Text text={[
        'If Willship is unable to collect your personal information then Willship may not be able to provide you with the products, services and opportunities that depend on the collection of that information.'
      ]} />
      <Heading text='5. To whom do we disclose personal information?' />
      <Text text={[
        'Willship may disclose your personal information to third parties in connection with the purposes described above.',
        'This may include disclosing your personal information to the following types of third parties:',
      ]} />
      <List items={[
        'its related companies;',
        'any potential third-party acquirer of Willship or its business or assets, and advisors to that third-party;',
        'its professional advisers (such as lawyers, accountants or auditors) and insurers;',
        'its employees, contractors and third party service providers who assist Willship in performing its functions and activities e.g. payment systems operators and financial institutions, cloud service providers, data storage providers, telecommunications providers and IT support services providers;',
        'organisations authorised by Willship to conduct promotional, research or marketing activities;',
        'third parties to whom you have authorised Willship to disclose your information (e.g. referees); and',
        'any other person as required or permitted by law.',
      ]} />
      <Text text={[
        'Willship does not sell or otherwise distribute your information to third parties.',
        'If Willship discloses your personal information to third parties it will use reasonable commercial efforts to ensure that such third parties only use your personal information as reasonably required for the purpose of disclosure and in a manner consistent with applicable laws, for example by (where commercially practical) including suitable privacy and confidentiality clauses in Willship’s agreement with a third party service provider to which Willship discloses your personal information.',
        'If Willship receives a request or demand for personal information from a regulatory body which on its face appears to be valid and lawful, Willship is under no obligation to:',
      ]} />
      <List items={[
        'withhold any personal information or related data, documentation or records from any regulatory body with apparent authority to seek delivery or access to such data; or',
        'refuse to provide any such regulatory body with access to such data data, documentation or records.',
      ]} />
      <Heading text='6. Does personal information leave Australia?' />
      <Text text={[
        'Willship stores personal information in servers located in Australia. However, Willship may disclose your personal information to overseas recipients, such as to subscribers, re-sellers and service providers located overseas, in order to provide its products and services and to obtain services. Such overseas recipients may be located in a large number of different countries which are likely to include the UK, USA, Germany, France and other EU countries, Singapore, and New Zealand. It is not practical for Willship to list every country where such overseas recipients may be located.',
        'Except where an exception applies under the Privacy Act or other relevant legislation, Willship will take reasonable steps to ensure that overseas recipients to whom Willship discloses personal information do not breach the Australian Privacy Principles stated in the Privacy Act, and any other relevant legislation relating to privacy and data security, in relation to such information.',
      ]} />
      <Heading text='7. How do we protect your personal information?' />
      <Text text={[
        'Willship engages service providers to store your personal information, including Microsoft Azure and Azure Storage. Willship recommends that you review these companies’ privacy policies to understand how they use and store your personal information.',
        'Willship will take reasonable steps to keep any personal information it holds about you secure.',
        'However, you acknowledge that the security of personal information transmitted over the internet cannot be guaranteed. Willship cannot guarantee that any personal information you disclose to Willship will not become publicly available. Except to the extent liability cannot be excluded due to the operation of statute, Willship excludes all liability (including in negligence) for the consequences of any unauthorised access to, disclosure of, misuse of or loss or corruption of your personal information.',
        'Nothing in this policy restricts, excludes or modifies or purports to restrict, exclude or modify Willship’s obligations under the Privacy Act and any other applicable legislation or any statutory consumer rights you may have under any applicable law including the Competition and Consumer Act 2010 (Cth).',
        'Please notify Willship immediately if you become aware of any breach of security.',
        'Willship will keep and maintain a backup copy of data stored or processed through the Platform. You should keep and maintain separate back up copy of all data stored or processed through the Platform for your own internal use.',
        'You acknowledge and agrees that Willship is a processor of any personal information included in the data provided by you to us, and you are the controller of that personal information. Willship will only process the personal data on documented instructions from you or any third party from which your personal information has been obtained.',
      ]} />
      <Heading text='8. Direct Marketing' />
      <Text text={[
        'Willship may use and disclose your personal information for the purpose of direct marketing to you if:'
      ]} />
      <List items={[
        'you have consented to Willship doing so; or',
        'it is otherwise permitted by law.',
      ]} />
      <Text text={[
        'Direct marketing involves communicating directly with you for the purpose of promoting goods or services to you. Direct marketing can be delivered by a range of methods including mail, telephone, email or SMS. You can unsubscribe from Willship’s direct marketing, or change your contact preferences, by contacting Willship (see the “How to contact us” section below).'
      ]} />
      <Heading text='9. How long do we keep your personal information?' />
      <Text text={[
        'Generally, Willship will retain your personal information for the period necessary for the purposes for which your personal information was collected (as outlined in this policy) unless a longer retention period is required by law.',
        'This means that Willship will store your personal information for the following periods:',
      ]} />
      <List items={[
        'if your personal information is provided to Willship by a subscriber or re-seller: only for so long as Willship requires it for the purpose of its agreement with the subscriber or re-seller;',
        'if you unsuccessfully apply for a job at Willship (whether as an employee or contractor): up to 6 months;',
        'if you work at Willship (whether as an employee or contractor): up to 6 years after you cease working with Willship;',
        'if Willship processes your personal information in connection with you being a supplier to Willship (or an employee or contractor of a supplier) or in connection with you being a subscriber or re-seller (or an employee or contractor of a subscriber or re-seller): up to 6 years from your last interaction with Willship; and',
        'if Willship processes your personal information for direct marketing purposes or processes your personal information based on your consent, Willship may process the information until you ask Willship to stop and for a short period after that (to allow Willship to implement your request). Willship will indefinitely keep a record of the fact that you have asked Willship not to send you direct marketing or to process your information so that Willship can respect your request in future.',
      ]} />
      <Text text={[
        'Willship may retain your personal information for a longer period of time if it is reasonably necessary to comply with Willship’s legal obligations, resolve a dispute or maintain security.',
        'When personal information is no longer required, Willship will take reasonable steps to delete the personal information from Willship’s systems or de-identify the personal information.',
      ]} />
      <Heading text='10. Your rights' />
      <Text text={[
        'How you can seek to access and correct personal information we hold about you',
        'You may seek access to personal information Willship holds about you by contacting Willship as described in the “How to contact us” section below.',
        'Willship will provide access to that information in accordance with applicable legal requirements, subject to certain exemptions which may apply. Willship may require that the person requesting access provide suitable identification and where permitted by law Willship may charge a fee for giving access to your personal information.',
        'If the personal information was provided to Willship by any of Willship’s subscribers or re-sellers, Willship may advise the relevant subscribers or re-sellers of your request and liaise with them about it.',
        'If you become aware that any personal information Willship holds about you is incorrect or if you wish to update your information, please contact Willship as described in the “How to contact us” section below.',
      ]} />
      <Heading text='11. How you can complain about a privacy issue?' />
      <Text text={[
        'You may make a privacy complaint in relation to personal information Willship holds about you by contacting Willship as described in the “How to contact us” section below.',
        'If you make a privacy complaint, Willship’s Data Protection Officer or another suitable staff member of Willship will investigate the matter and attempt to resolve it as soon as reasonably possible.',
        'If you consider your privacy concerns have not been resolved satisfactorily by Willship, or you wish to obtain more information on privacy requirements:',
      ]} />
      <List items={[
        'you can contact the Office of the Australian Information Commissioner on 1300 363 992 or visit their website at oaic.gov.au; and',
        'if you are located in the European Union you can contact your local data protection authority: https://edpb.europa.eu/about-edpb/board/members_en.',
      ]} />
      <Heading text='Individuals located in the EU' />
      <Text text={[
        'If you are located in the European Union, you may have the following rights:'
      ]} />
      <List items={[
        'The right to access, rectify or update the personal information Willship holds about you.',
        'The right to request erasure of personal information Willship holds about you, for example if the personal information is no longer necessary to provide services to you.',
        'The right to require Willship to stop using all or some of your personal information (for example, if Willship no longer has a legal right to keep using it) or to restrict its use of your personal information (for example, if you consider that the personal information Willship holds about you is inaccurate or if it is unlawfully held).',
        'The right to data portability. In some circumstances you have the right to be provided with a copy of the personal information Willship has about you in a structured, machine-readable and commonly used format.',
        'The right to withdraw consent. You may withdraw your consent at any time where Willship relied on your consent to process your personal information.',
      ]} />
      <Text text={[
        'Willship may ask you to provide suitable identification when you seek to exercise any of these rights.'
      ]} />
      <Heading text='13. Local exemptions and inconsistency with law' />
      <Text text={[
        'Where local laws allow for an exemption to compliance with certain legal obligations (for example, the employee records exemption in Australia), Willship may rely on such an exemption.',
        'This policy will not apply to the extent that it is inconsistent with any applicable law.',
      ]} />
      <Heading text='14. Changes to this policy' />
      <Text text={[
        'Willship may change this policy from time to time at its discretion. This policy was last updated in February 2021. If Willship makes further updates to this policy, Willship will post the amended policy on its websites. Your continued dealings with Willship, for example use of its websites, products or services, will signify your agreement to this policy as amended.'
      ]} />
      <Heading text='How to contact us' />
      <p>
        If you have a query, concern or complaint about the manner in which your personal information has been collected or handled by Willship or would like to request access to or correction of the personal information Willship holds about you please contact Willship’s Data Protection Officer via email to <Link href='mailto:general@willship.com.au'><a>general@willship.com.au</a></Link>
      </p>
    </section>
  );
};

export default PrivacyStatement;