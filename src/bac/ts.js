{data.filter((item) => item.menu_option === '1').map((item) => (
    <React.Fragment key={`item-${item.id}`}>
      <Route
        key={`item-${item.id}-home`}
        path={`${'/' + item.link_sr_latn}`}
        element={item.link_sr_latn === "" ? (
          <Home
            key={item.id}
            allData={data}
            title={item.heading_sr_latn}
            text={item.text_sr_latn}
            image={item.image}
            icon={item.icon}
            urlPage={item.link_sr_latn}
            slaveData={item.slave_data}
          />
        ) : (
          <Page
            allData={data}
            title={item.heading_sr_latn}
            text={item.text_sr_latn}
            image={item.image}
            icon={item.icon}
            urlPage={item.link_sr_latn}
            slaveData={item.slave_data}
          />
        )}
      />
      {JSON.parse(item.slave_data).map((slave) => (
        slave.link ? (
          <React.Fragment key={`route-${item.id}-${slave.id}`}>
            <Route
              key={`route-${item.id}-${slave.id}-main`}
              path={`/${item.link_sr_latn}/${slave.link}`}
              element={
                <Subpage
                  title={slave.title}
                  text={slave.text}
                  image={slave.image}
                  urlPage={slave.link}
                  slaveData={slave.subslaves}
                />
              }
            />
            {slave.subslaves?.map((subslave) => (
              subslave.link ? (
                <Route
                  key={`route-${item.id}-${slave.id}-${subslave.id}`}
                  path={`/${item.link_sr_latn}/${slave.link}/${subslave.link}`}
                  element={
                    <SubSubpage
                      // Pass necessary props to SubSubpage component
                    />
                  }
                />
              ) : null
            ))}
          </React.Fragment>
        ) : null
      ))}
    </React.Fragment>
  ))}
  <Route key={13131313} path="*" element={<NotFound />} />
</Routes>